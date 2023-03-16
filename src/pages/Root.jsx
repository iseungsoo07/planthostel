import { Footer } from "components/footer";
import { Navbar } from "components/navbar";
import ScrollToTop from "components/scrollToTop";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./../components/header";
export default function Root() {
    return (
        <div>
            <Header />
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    );
}
