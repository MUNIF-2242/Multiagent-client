import { DigiContextProvider } from "@/context/DigiContext";
import { ToastContainer } from "react-toastify";
import "../public/assets/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "overlayscrollbars/overlayscrollbars.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import "react-tooltip/dist/react-tooltip.css";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { RagChatbotProvider } from "@/context/RagChatbotContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // List of page paths where you don't want to use the Layout
  const pagesWithoutLayout = [
    "/login",
    "/login2",
    "/loginStatus",
    "/registration",
    "/registration2",
    "/resetPassword",
    "/updatePassword",
    "/comingSoon",
    "/comingSoon2",
    "/error400",
    "/error403",
    "/error404",
    "/error408",
    "/error500",
    "/error503",
    "/error504",
    "/login3",
    "/underConstruction",
    "/pricingTable",
    "/pricingTable2",
    "/openai/openAILogin",
  ];

  const shouldUseLayout = !pagesWithoutLayout.includes(router.pathname);

  return (
    <SessionProvider session={pageProps.session}>
      {/* Wrap with SessionProvider */}
      <RagChatbotProvider>
        <DigiContextProvider>
          {shouldUseLayout ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
          <ToastContainer />
        </DigiContextProvider>
      </RagChatbotProvider>
    </SessionProvider>
  );
}
