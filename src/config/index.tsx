import { FaDiscord, FaLinkedinIn, FaTelegram, FaTwitter } from 'react-icons/fa';
export const SOCIAL_LINKS = [
    {
        icon: <FaDiscord size={18} />,
        icon2: <FaDiscord size={24} />,
        name: 'Discord',
        link: 'https://discord.com/invite/mzGa9mfdMq',
    },
    {
        icon: <FaTwitter size={18} />,
        icon2: <FaTwitter size={24} />,
        name: 'Twitter',
        link: 'https://x.com/intent/user?screen_name=turfGG_',
    },
    {
        icon: <FaLinkedinIn size={18} />,
        icon2: <FaLinkedinIn size={24} />,
        name: 'Linkedin',
        link: 'https://www.linkedin.com/company/turf-gg',
    },
    {
        icon: <FaTelegram size={18} />,
        icon2: <FaTelegram size={24} />,
        name: 'Telegram',
        link: 'https://telegram.me/turfGG',
    },
];
export const communityConfig = [
    {
        item: 'Discord',
        link: 'https://discord.com/invite/mzGa9mfdMq',
    },
    {
        item: 'Telegram',
        link: 'https://t.me/turf_fi',
    },
];
export const resourcesConfig = [
    {
        item: 'Whitepaper',
        link: 'https://docsend.com/view/ty8t63tr9hj2rwve',
    },
    {
        item: 'Documentation',
        link: 'https://docs.0xturf.gg',
    },
];
export const contactConfig = [
    {
        item: 'Mail Us',
        link: 'mailTo:connect@0xturf.gg',
    },
    {
        item: 'DM us on Twitter',
        link: 'https://twitter.com/messages/compose?recipient_id=1518981548137197569&text=Hello',
    },
];
export const TurfLogoIcon = () => (
    <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(103deg)' }}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.28369 17.9286C9.28369 16.9561 10.0721 16.1677 11.0446 16.1677L14.6633 16.1677C14.945 16.1677 15.2225 16.2353 15.4726 16.3647L19.0828 18.233L20.9452 14.6341L20.9452 11.1698L18.0507 11.1698L18.0507 14.8635C18.0507 15.3841 17.6287 15.8061 17.1081 15.8061C16.5875 15.8061 16.1655 15.3841 16.1655 14.8635L16.1655 11.0455C16.1655 10.073 16.9539 9.28467 17.9264 9.28467L21.0695 9.28467C22.042 9.28467 22.8303 10.073 22.8303 11.0455L22.8303 14.6643C22.8303 14.9459 22.7628 15.2235 22.6333 15.4736L20.7571 19.0994L24.3282 20.9474L27.8287 20.9474L27.8287 18.0529L24.0988 18.0529C23.5782 18.0529 23.1562 17.6309 23.1562 17.1103C23.1562 16.5898 23.5782 16.1677 24.0988 16.1677L27.953 16.1677C28.9255 16.1677 29.7139 16.9561 29.7139 17.9286L29.7139 21.0717C29.7139 22.0442 28.9255 22.8325 27.953 22.8325L24.298 22.8325C24.0164 22.8325 23.7388 22.765 23.4887 22.6355L19.8907 20.7736L18.0507 24.3292L18.0507 27.8297L20.9452 27.8297L20.9452 24.0998C20.9452 23.5792 21.3672 23.1572 21.8878 23.1572C22.4083 23.1572 22.8303 23.5792 22.8303 24.0998L22.8303 27.954C22.8303 28.9265 22.042 29.7148 21.0695 29.7148L17.9264 29.7148C16.9539 29.7148 16.1655 28.9265 16.1655 27.954L16.1655 24.299C16.1655 24.0173 16.2331 23.7398 16.3625 23.4897L18.2164 19.9072L14.6331 18.0529L11.1688 18.0529L11.1688 20.9474L14.8625 20.9474C15.3831 20.9474 15.8051 21.3694 15.8051 21.89C15.8051 22.4105 15.3831 22.8325 14.8625 22.8325L11.0446 22.8325C10.0721 22.8325 9.28369 22.0442 9.28369 21.0717L9.28369 17.9286Z"
            fill="#5E00FF"
            fillOpacity="0.08"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5863 8.85853L21.1485 13.0809C20.732 13.8022 19.8097 14.0493 19.0884 13.6329C18.367 13.2164 18.1199 12.2941 18.5364 11.5728L21.4301 6.56062C22.0112 5.55418 23.2981 5.20934 24.3046 5.79042L28.9714 8.48482C29.9779 9.0659 30.3227 10.3528 29.7416 11.3593L26.9204 16.2457C26.7521 16.5372 26.5164 16.7841 26.233 16.9656L21.5673 19.9539L24.412 24.3952L28.3596 26.6744L30.142 23.5871L25.8765 21.1244C25.1552 20.708 24.908 19.7856 25.3245 19.0643C25.7409 18.343 26.6633 18.0958 27.3846 18.5123L32.4399 21.431C33.4464 22.0121 33.7912 23.299 33.2101 24.3054L30.5157 28.9723C29.9346 29.9787 28.6477 30.3236 27.6413 29.7425L22.7116 26.8964C22.4201 26.7281 22.1733 26.4924 21.9918 26.2089L19.0274 21.5807L14.6062 24.4124L12.3271 28.36L15.4143 30.1424L17.877 25.8769C18.2935 25.1556 19.2158 24.9085 19.9371 25.3249C20.6585 25.7414 20.9056 26.6637 20.4892 27.385L17.5705 32.4404C16.9894 33.4468 15.7024 33.7916 14.696 33.2106L10.0292 30.5162C9.02271 29.9351 8.67788 28.6482 9.25895 27.6417L12.1051 22.712C12.2734 22.4206 12.5091 22.1737 12.7925 21.9922L13.6059 23.2622L12.7925 21.9922L17.4006 19.0408L14.5449 14.5822L10.6405 12.3279L8.85809 15.4152L13.0804 17.853C13.8017 18.2694 14.0489 19.1918 13.6324 19.9131C13.216 20.6344 12.2936 20.8815 11.5723 20.4651L6.56018 17.5713C5.55374 16.9903 5.2089 15.7033 5.78998 14.6969L8.48438 10.03C9.06546 9.02358 10.3524 8.67875 11.3588 9.25982L16.2453 12.081C16.5368 12.2493 16.7836 12.485 16.9651 12.7684L19.9405 17.414L24.4193 14.5454L26.6735 10.641L23.5863 8.85853Z"
            fill="url(#paint0_linear_153_8675)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_153_8675"
                x1="24.5306"
                y1="39.0534"
                x2="14.0802"
                y2="0.0522284"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#5E00FF" />
                <stop offset="1" stopColor="#CB00FF" />
            </linearGradient>
        </defs>
    </svg>
);
