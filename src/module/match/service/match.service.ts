import { Injectable } from '@nestjs/common';
import { MatchRepository } from '../repository/match.repository';
import { BatsmanRepository } from 'src/module/batsman/repository/batsman.repository';
import { BowlerRepository } from 'src/module/bowler/repository/bowler.repository';
import { ExtrasRepository } from 'src/module/extras/repository/Extras.repository';
import { UpdateScoreDTO } from 'src/module/team/dto/Createteam.dto';
import { TeamRepository } from 'src/module/team/repository/team.repository';

@Injectable()
export class MatchService {
    constructor(
        private readonly matchRepository: MatchRepository,
        private readonly batsmanRepository: BatsmanRepository,
        private readonly bowlerRepository: BowlerRepository,
        private readonly teamRepository: TeamRepository,
        private readonly extrasRepository: ExtrasRepository,
    ) {}

    async updateScore(updateScoreDTO: UpdateScoreDTO) {
        const { matchId, scenario, runs, batsmanId, bowlerId, extras } =
            updateScoreDTO;

        const match = await this.matchRepository.findById(matchId);
        if (!match) {
            throw new Error('Match not found');
        }

        const batsman = await this.batsmanRepository.findOneBatsman(batsmanId);
        if (!batsman) {
            throw new Error('Batsman not found');
        }

        const bowler = await this.bowlerRepository.findById(bowlerId);
        if (!bowler) {
            throw new Error('Bowler not found');
        }

        const team = await this.teamRepository.findById(match.teams);
        if (!team) {
            throw new Error('Team not found');
        }

        switch (scenario) {
            case 'wide': {
                match.totalRuns += runs;
                bowler.runsConceded += runs;
                bowler.wides += 1;
                team.totalRuns += runs;
                // No runs credited to batsman
                await this.extrasRepository.create({
                    matchId,
                    type: 'wide',
                    runs,
                });
                break;
            }

            case 'noball_bye': {
                match.totalRuns += runs;
                bowler.runsConceded += 1;
                team.totalRuns += runs;
                batsman.ballsFaced += 1; // Batsman balls increase
                await this.extrasRepository.create({
                    matchId,
                    type: 'noball',
                    runs: 1,
                }); // Noball credit
                await this.extrasRepository.create({
                    matchId,
                    type: 'bye',
                    runs: runs - 1,
                }); // Bye credit
                break;
            }

            case 'noball_runs': {
                match.totalRuns += runs;
                bowler.runsConceded += runs;
                batsman.runs += runs - 1; // All runs except 1 credited to batsman
                batsman.ballsFaced += 1; // Batsman balls increase
                await this.extrasRepository.create({
                    matchId,
                    type: 'noball',
                    runs: 1,
                }); // Noball credit
                break;
            }

            case 'noball_legbye': {
                match.totalRuns += runs;
                bowler.runsConceded += 1;
                team.totalRuns += runs;
                batsman.ballsFaced += 1; // Batsman balls increase
                await this.extrasRepository.create({
                    matchId,
                    type: 'noball',
                    runs: 1,
                }); // Noball credit
                await this.extrasRepository.create({
                    matchId,
                    type: 'legbye',
                    runs: runs - 1,
                }); // Legbye credit
                break;
            }

            case 'legbye_overthrow': {
                match.totalRuns += runs;
                team.totalRuns += runs;
                await this.extrasRepository.create({
                    matchId,
                    type: 'legbye',
                    runs: runs,
                });
                break;
            }

            case 'runs_overthrow': {
                batsman.runs += runs; // All runs credited to batsman
                match.totalRuns += runs;
                team.totalRuns += runs;
                break;
            }

            default:
                throw new Error('Invalid scenario');
        }

        // Save all the updates to the database
        await this.matchRepository.save(match);
        await this.batsmanRepository.create(batsman);
        await this.bowlerRepository.create(bowler);
        await this.teamRepository.create(team);

        return match;
    }

    async getMatchById(id: string) {
        return await this.matchRepository.findById(id);
    }

    async getAllMatches() {
        return await this.matchRepository.findAll();
    }
}
