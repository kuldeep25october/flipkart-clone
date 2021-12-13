import { Layout } from 'antd'
import React from 'react'
import Header from '../../Molecules/Header/index'
import Footer from '../../Molecules/Footer/index'

const Content = Layout
const Pages = (props) => {
    return (
        <>
            <Layout>
                {
                    props.showHeader &&
                    <Header />
                }
                <Content>
                    {
                        props.children
                    }
                </Content>
                {
                    props.showFooter &&
                    <Footer />
                }
            </Layout>
        </>
    )
}
export default Pages;