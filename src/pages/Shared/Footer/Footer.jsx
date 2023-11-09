

const Footer = () => {
    return (
        <footer className="footer p-10  bg-success-content text-white">
            <aside>
                <div className=" h-full w-1/4 mb-3 "><img src="https://nrai.org/wp-content/uploads/2019/02/FSSAI-Introduces-%E2%80%98Save-Food-Share-Food-Share-Joy%E2%80%99-Initiative-e1550043851366-660x400.jpg" alt="" /></div>
                <p>Providing reliable tech since 1992</p>
            </aside>
            
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Available Foods</a>
                <a className="link link-hover">Add Food</a>
                <a className="link link-hover">Manage My Food</a>
                <a className="link link-hover">My Food Reqest</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;