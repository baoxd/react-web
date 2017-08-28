import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import {
	Input,
    Button,
    Select,
    DatePicker,
    Cascader
} from 'antd'
import * as _ from 'lodash'
import './index.less'

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fields: {},
			autoComplete: {},
			disabled: {},
			warnings: {}
		}
	}

	generateInput(fields) {
		const components = []
		this.needToEmptyStyleComponents = []
		let i = 0 

		for(const field of fields){
			let items = [];
			if (field.items) {
				if (field.dependency) {  // 选择省份后才能选择城市
					const params = [];
					for (const dependency of field.dependency) {
						params.push(this.state.fields[dependency.key]);
					}
					items = field.items(...params);
				} else {
					items = field.items();
				}
			}

			let component = null;

			switch(field.type) {
				case 'input':
				
			}

		}
	}
}

SearchBar.defaultProps = {
	hasReset: true
}