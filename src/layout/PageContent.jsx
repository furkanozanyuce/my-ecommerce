import Header from "./Header";

function PageContent({children}) {

    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default PageContent;
