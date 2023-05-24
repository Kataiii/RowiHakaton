import React from "react";
import { Avatar } from "antd";
import { Form, Input, Button } from 'antd';
import type { FormItemProps } from 'antd';
import styles from "./css/ProfilePage.module.css";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const ProfilePage: React.FC = () => {
    return(
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar className={styles.AvatarImg} />
                <div style={{ marginLeft: '558px', marginTop: '81px'}}>
                <Form name="form_item_path" layout="horizontal">
                    <MyFormItemGroup prefix={['user']}>
                    <MyFormItemGroup prefix={['name']}>
                        <MyFormItem name="lastName" label='Фамилия'>
                        <Input className={styles.FormFull}/>
                        </MyFormItem>
                        <MyFormItem name="firstName" label="Имя">
                        <Input />
                        </MyFormItem>
                    </MyFormItemGroup>
                    <MyFormItem name="middleName" label="Отчество">
                        <Input />
                    </MyFormItem>
                    </MyFormItemGroup>
                    <Button type="primary" htmlType="submit" style={{backgroundColor:'#4164EE'}}>
                    Сохранить
                    </Button>
                </Form>
                </div>
            </div>
        </div>

    )
}

export default ProfilePage;