import Navbar from "@/app/components/NavBar/Navbar";
import ThemeToggler from "@/app/components/ThemeToggler/ThemeToggler";
import style from "./HeaderSection.module.scss";

export default function HeaderSection() {
    return (
        <>
            <section className={style.headerSection}>
                <Navbar />
                <ThemeToggler />
            </section>
        </>
    )
}