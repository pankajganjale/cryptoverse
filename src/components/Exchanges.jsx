import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row style={{padding: "10px", border: "1px solid black", margin: "10px"}} style={{textAlign: "center"}}>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      {
        exchangesList.map((exchange) =><Row style={{padding: "10px", border: "0.5px solid gray", margin: "10px"}} key={exchange.id}  >
          <Col key="1" span={6}>
            <Text><strong>{exchange.rank}.</strong></Text>
            <Avatar className="exchange-image" src={exchange.iconUrl} />
            <Text><strong>{exchange.name}</strong></Text>
          </Col>
          <Col style={{textAlign: "center"}} key="2" span={6}>${millify(exchange.volume)}</Col>
          <Col style={{textAlign: "center"}} key="3" span={6}>{millify(exchange.numberOfMarkets)}</Col>
          <Col style={{textAlign: "center"}} key="4" span={6}>{millify(exchange.marketShare)}%</Col>
        </Row>)
      }
      {/* <Row>
        {exchangesList.map((exchange) => (
          <Col key={exchange.id} span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={(
                  <Row key={exchange.id}>
                    <Col key="1" span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col key="2" span={6}>${millify(exchange.volume)}</Col>
                    <Col key="3" span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col key="4" span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default Exchanges;