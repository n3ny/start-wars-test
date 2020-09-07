import React, { useEffect, useState } from 'react';
import { Form, Button, Input, InputNumber } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const SpaceshipForm = (props) => {
    const [data, setData] = useState({});
    const { getFieldDecorator } = props.form;

    useEffect(() => {
        const { data } = props.location.state;
        setData(data);

        props.form.setFieldsValue({
            ...data
        })
        console.log('data', data, props)

    }, [data])

    const onFinish = values => {
        console.log(values);
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
            initialValues={{ data: { ...data } }}>
            <Form.Item
                name={['data', 'name']}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['data', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['data', 'age']}
                label="Age"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item name={['data', 'website']} label="Website">
                <Input />
            </Form.Item>
            <Form.Item name={['data', 'introduction']} label="Introduction">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
            </Button>
            </Form.Item>
        </Form>
    )
}

export default Form.create()(SpaceshipForm);