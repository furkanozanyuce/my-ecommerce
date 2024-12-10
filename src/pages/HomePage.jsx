import EditorsPick from "../components/EditorsPick";
import Slider from "../components/Slider";
import PageContent from "../layout/PageContent";

function HomePage() {

    return (
        <div>
            <PageContent>
                <Slider />
                <EditorsPick />
            </PageContent>
        </div>
    )
}

export default HomePage;
