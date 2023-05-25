import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "../../components/Button/Button";
import Leaderboard from "../../components/LeaderBoard/leaderboard";
import GameHistory from "../../components/GameHistory/gameHistory";
import LandingInstructionsModal from "../../components/InstructionsModal/LandingInstructionsModal";
import useModal from "../../components/InstructionsModal/useInstructionsModal";

const LandingPage = () => {

	const {isShowing, toggle} = useModal();
	return (
		<div className="landingContainer">
			<div className="helpButtonflex">
				<button className={"helpButton"} onClick={toggle}>?</button>
				<LandingInstructionsModal
					isShowing={isShowing}
					hide={toggle}
				/>
			</div>
			<div className="pageTitle">Husky seeks Kitty</div>
			<div className="dataContainer">
				<Leaderboard
					styles={"landingLeaderboard"}
					site={"landingPage"}
				/>
				<GameHistory />
			</div>
			<div className="gameButtons">
				<Link to="/game/normalpuzzle">
					<Button additionalStyles={"buttons"} buttonType={"button"}>
						Normal Puzzle
					</Button>
				</Link>
				<Link to="/game/dailypuzzle">
					<Button additionalStyles={"buttonsspecial"} buttonType={"button"}>
						Daily Puzzle
					</Button>
				</Link>
				<Link to="/game/designpuzzle">
					<Button additionalStyles={"buttons"} buttonType={"button"}>
						Design Puzzle
					</Button>
				</Link>
			</div>
		</div>
	);
};



export default LandingPage;
