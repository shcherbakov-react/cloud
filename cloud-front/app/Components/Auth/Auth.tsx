import cls from './Auth.module.scss'
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';


export const LoginForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Логин"
                name="username"
                className={cls.input}
                rules={[{ required: true, message: 'Введите логин!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Пароль"
                name="password"
                className={cls.input}
                rules={[{ required: true, message: 'Введите пароль!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                className={cls.input}
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}