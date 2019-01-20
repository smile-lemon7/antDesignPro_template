import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Button,
  Dropdown,
  Menu,
  Icon,
  Radio,
  Card,
} from 'antd';
import { FormattedMessage } from 'umi/locale';
import { routerRedux } from 'dva/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


@connect(
  trainsit_map => ({
    trainsit_map,
  }),
  dispatch => ({})
)
class Products extends Component {
  render() {
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          dddddd
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Products;
