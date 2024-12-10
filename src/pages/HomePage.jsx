import EditorsPick from "../components/EditorsPick";
import Slider from "../components/Slider";
import PageContent from "../layout/PageContent";

function HomePage() {
    const firstSlides = [
        {
            id: 1,
            title: "SUMMER 2020",
            subtitle: "NEW COLLECTION",
            description:
                "We know how large objects will act, but things on a small scale.",
            buttonText: "SHOP NOW",
            image:
                "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FejtigIOws8eu86j53A9M5dXOKwpfNbOYYmYBbwg46T6F~sBE601qt0fKwXD7d0xIjAwPUKrx2~HXMR7Ficu05Hcx4X5aryA1fj9ljSq1s1xIAALuqJj2-E9Q1vyck4tV6v~uKZCM26l3DPRokPuMvQ-mKSxDvkkK9GDv6tvk4fVakHJzCgS~06G0306FElyJsQ79ED5EDdyxiJgCAZ6f7nnWV~zQ~QaB~-xJUGh70jiAh6lSk55CAWOZ~xzmYoT4GsPEYly5U3owlJqk2KkI5pIOGzaKH1w~oDFC0k9Sh40dbL2~fr6Cw9XgbL894Ao4d1lvckyZyajLZoMevulPg__",
            bgStyle: {
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            },
        },
        {
            id: 2,
            title: "WINTER SALE",
            subtitle: "HOT DEALS",
            description: "Discover our winter collection with amazing discounts.",
            buttonText: "SHOP NOW",
            image:
                "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FejtigIOws8eu86j53A9M5dXOKwpfNbOYYmYBbwg46T6F~sBE601qt0fKwXD7d0xIjAwPUKrx2~HXMR7Ficu05Hcx4X5aryA1fj9ljSq1s1xIAALuqJj2-E9Q1vyck4tV6v~uKZCM26l3DPRokPuMvQ-mKSxDvkkK9GDv6tvk4fVakHJzCgS~06G0306FElyJsQ79ED5EDdyxiJgCAZ6f7nnWV~zQ~QaB~-xJUGh70jiAh6lSk55CAWOZ~xzmYoT4GsPEYly5U3owlJqk2KkI5pIOGzaKH1w~oDFC0k9Sh40dbL2~fr6Cw9XgbL894Ao4d1lvckyZyajLZoMevulPg__",
            bgStyle: {
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            },
        },
    ];

    const secondSlides = [
        {
            id: 1,
            title: "SUMMER 2021",
            subtitle: "Vita Classic Product",
            description:
                "We know how large objects will act. We know how are objects will act.",
            buttonText: "ADD TO CARD",
            price: "$16.48",
            image:
                "https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEv2bprCj9asXaP7B85Gz6vVs3bjN-S11g7PYry4Veg2QgqSm9wNZoAtrouxsH1~68BS66M1RuePGozS9l97XRfGcRvxyYQvGFpJoh24HCoFtrH-J69h3b0jtpFx6iNWDVMrFD-RwLyTkaJc82aD4XfCZzbxj2HdahMfksnTULxdOwDcuPYNyAZ5RJR~mARrMs6AKcSnRR-TDIaODj7Jz9ZPfnVGCk2pfFkDz7KhEt-qL5177nuvLpXT4T32kb~357htjJ8kYVaTPHhRq9f5i~wBz0j6c8qxpt2NxZdk-wd121hV9Zl8QbttoalPcmLT2x4MIKyYXFUCgzGqBH7n~g__",
            bgStyle: {
                backgroundSize: "contain",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
            },
        },
        {
            id: 2,
            title: "WINTER SALE",
            subtitle: "Vita Classic Product",
            description: "Discover our winter collection with amazing discounts.",
            buttonText: "ADD TO CARD",
            price: "$16.48",
            image:
                "https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEv2bprCj9asXaP7B85Gz6vVs3bjN-S11g7PYry4Veg2QgqSm9wNZoAtrouxsH1~68BS66M1RuePGozS9l97XRfGcRvxyYQvGFpJoh24HCoFtrH-J69h3b0jtpFx6iNWDVMrFD-RwLyTkaJc82aD4XfCZzbxj2HdahMfksnTULxdOwDcuPYNyAZ5RJR~mARrMs6AKcSnRR-TDIaODj7Jz9ZPfnVGCk2pfFkDz7KhEt-qL5177nuvLpXT4T32kb~357htjJ8kYVaTPHhRq9f5i~wBz0j6c8qxpt2NxZdk-wd121hV9Zl8QbttoalPcmLT2x4MIKyYXFUCgzGqBH7n~g__",
            bgStyle: {
                backgroundSize: "contain",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
            },
        },
    ];

    return (
        <div>
            <PageContent>
                <Slider slides={firstSlides} />
                <EditorsPick />
                <Slider slides={secondSlides} />
            </PageContent>
        </div>
    )
}

export default HomePage;
