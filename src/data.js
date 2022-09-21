const dataModel = {
    loading: true,
    skills: {
        items: [
            "Vue.js, React.js",
            "NativeScript, React Native",
            "Node.js, MYSQL",
            "AWS Lambda, SNS, Aurora, DynamoDB, S3, Cloudwatch, API Gateway, Cognito",
            "Adobe Ps, Ai, In, Xd, Pr, Ae",
        ],
    },
    experience: {
        items: [
            {
                org: "Crowers Limited",
                orgHref: "https://crowers.co.uk/",
                startDate: new Date(2018, 0),
                endDate: null,
                location: "Cambridge, England",
                roles: [
                    "Full stack development of web and mobile apps",
                    "e-Commerce, SaaS, Supply Chain and Asset Management",
                ],
            },
            {
                org: "catalog360 Limited",
                orgHref: "https://catalog360.com/",
                startDate: new Date(2015, 4),
                endDate: new Date(2017, 11),
                location: "Letchworth, England",
                roles: [
                    "e-Commerce Web app design and development",
                    "Development of email templates",
                    "Marketing website content",
                ],
            },
        ],
    },
    education: {
        items: [
            {
                title: "BA: Digital Arts",
                org: "University of Kent",
                startDate: new Date(2014, 8),
                endDate: new Date(2017, 6),
                location: "Canterbury, England",
                grade: "First-Class Honours",
                roles: [
                    "Game development",
                    "Web design and development",
                    "Image and video editing",
                    "3D modelling and animation",
                ],
            },
            {
                title: "Lvl 3 Diploma in IT",
                org: "North Hertfordshire College",
                orgHref: "https://catalog360.com/",
                startDate: new Date(2011, 8),
                endDate: new Date(2014, 6),
                location: "Stevenage, England",
                grade: "Distinction, Distinction, Merit",
                roles: ["Web development", "2D Game development"],
            },
        ],
    },
};

export default dataModel;
