import { LayoutType } from '../Types/Layout';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: LayoutType) => {
    return (
        <>
            <a href='#main-content' className='skip-to-content'>Skip to content</a>
            <Header />
            <main id="main-content">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;