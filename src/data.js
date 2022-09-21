const dataModel = {
    loading: true,
    skills: {
        items: [
            "JavaScript, Vue.js, Node.js, SQL",
            "AWS Lambda, API Gateway, Cognito, Amplify, S3, CloudWatch",
            "Google Dialogflow, Firebase, Maps APIs",
            "Native iOS and Android Apps with NativeScript",
            "Adobe Ps, Ai, In, Xd, Pr, Ae",
            "Autodesk Maya, Mudbox",
            "Unity 3D, 2D",
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
                    "Full stack development of web and mobile applications",
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
                    "Web application design maintenance",
                    "Development of Email Templates",
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
                    "Image and Video editing",
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
                grade: "Distincion, Distincion, Merit",
                roles: ["Web development", "2D Game development"],
            },
        ],
    },
};

export default dataModel;
