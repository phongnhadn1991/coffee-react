import { Layout, Menu, theme } from 'antd';

export const Header = () => {

    const { Header } = Layout;
    const items1 = ['Trang chủ', 'Sản phẩm', 'Tin tức'].map((key) => ({
        key,
        label: `${key}`,
    }));

    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Trang chủ']} items={items1} />
        </Header>
    )
}