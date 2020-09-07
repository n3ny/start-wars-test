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

const requiredRule =  {
    required: true,
}

const SpaceshipForm = (props) => {
    const [spaceship, setData] = useState({});
    const [form] = Form.useForm();

    useEffect(() => {

        const { data } = props.location.state;
        setData(data);

        form.setFieldsValue({
            data: {...data}
        })

    }, [spaceship])

    const onFinish = values => {
        console.log(values);
    };

    return (
        <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['data', 'name']}
                label="Name"
                rules={[requiredRule]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['data', 'model']}
                label="Model"
                rules={[requiredRule]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['data', 'cost_in_credits']}
                label="Credits"
                rules={[requiredRule]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['data', 'max_atmosphering_speed']}
                label="Speed"
                rules={[requiredRule]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['data', 'cargo_capacity']}
                label="Cargo capacity"
                rules={[requiredRule]}
            >
                <Input />
            </Form.Item>
            
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
            </Button>
            </Form.Item>
        </Form>
    )
}

export default SpaceshipForm;