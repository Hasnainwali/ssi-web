// src/components/SEO.jsx
import { Helmet } from "react-helmet";

const FullSEO = ({ title, description, image, url }) => {
    const defaultImage = "https://res.cloudinary.com/dhnkdcbz4/image/upload/v1758515661/logo_igh9nz.webp";

    return (
        <Helmet>
            <title>{title || "Syed Software Institute"}</title>
            <meta name="description" content={description || "Empowering Bannu's Talent with IT Skills"} />

            {/* Open Graph */}
            <meta property="og:title" content={title || "Syed Software Institute"} />
            <meta property="og:description" content={description || "Empowering Bannu's Talent with IT Skills"} />
            <meta property="og:image" content={image || defaultImage} />
            {/* <meta property="og:url" content={url || "https://syedsoftwareinstitute.com/"} /> */}
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || "Syed Software Institute"} />
            <meta name="twitter:description" content={description || "Empowering Bannu's Talent with IT Skills"} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default FullSEO;
