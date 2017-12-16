import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MdIconLabel from 'material-ui/svg-icons/action/label';
import Divider from 'material-ui/Divider';
import './css/Prepare.css';


class Prepare extends React.Component {
	render() {
		let data = this.props.mainApp.state.contentParams.questionData;
		let problemTypeStr;

		if (data.type === 0) {
			problemTypeStr = '打卡题';
		} else if (data.type === 1) {
			problemTypeStr = '复习题';
		} else if (data.type === 2) {
			problemTypeStr = '团队赛';
		} else if (data.type === 3) {
			problemTypeStr = '单挑赛';
		}

		return (
			<Card>
				<CardHeader
					title={<h2><MdIconLabel /> {data.subtitle}</h2>}
					subtitle={problemTypeStr + " | " + data.condition}
				/>
				<Divider />
				<CardText>
					<div>
						<h4>{data.description}</h4>
						<div>
							<ul>
								<li>限时：{data.timeLimit}</li>
								<li>题数：{data.sum}道</li>
							</ul>
						</div>
					</div>
				</CardText>
				<CardActions className='Prepare-action'>
					<RaisedButton primary={true} label='返回' onClick={() => this.props.mainApp.back()}/>
					<RaisedButton primary={true} label='开始挑战' onClick={() => this.props.mainApp.enterChallenge()} />
				</CardActions>
			</Card>
		);
	}
}

export default Prepare;
