import React from 'react';
import { Card, Row, Col } from 'antd';

class Teams extends React.Component {
	render() {
		return (
			/* TEAMS SECTION */
			<div>
				<Row>
					<div className="problem-title">Our Unique Team</div>
				</Row>
				<div className="site-card-wrapper">
					<Row gutter={16} style={{ margin:'0 auto', textAlign:'center' }}>
						<Col span={4}>
							<Card title="Adesh Kolte" bordered={false}>
								Developer
							</Card>
						</Col>
						<Col span={4}>
							<Card title="
					                              Nihal " bordered={false}>
								Developer
							</Card>
						</Col>
						<Col span={4}>
							<Card title="Prashant" bordered={false}>
								Developer
							</Card>
						</Col>
						<Col span={4}>
							<Card title="Shavez" bordered={false}>
								Documentation
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
export default Teams;
