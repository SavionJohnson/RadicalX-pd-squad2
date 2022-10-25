import Dashboard_icon from '../../../images/Dashboard_icon.png'
import internships_icon from '../../../images/book.png'
import jobs_icon from '../../../images/briefcase.png'
import settings_icon from '../../../images/setting-2.png'
import apprenticeships_icon from '../../../images/apprenticeship.png'

/*Highlighted Icons*/

import DashboardH_icon from '../../../images/Highlighted_icons/Dashboard_iconH.png'
import internshipsH_icon from '../../../images/Highlighted_icons/bookH.png'
import jobsH_icon from '../../../images/Highlighted_icons/briefcaseH.png'
import settingsH_icon from '../../../images/Highlighted_icons/setting-2H.png'
import apprenticeshipsH_icon from'../../../images/Highlighted_icons/ApprenticeshipsH.png'

export const SidebarData = [
    {
        title: "Dashboard",
        link: "",
        image: Dashboard_icon,
        image2: DashboardH_icon

    },
    {
        title: "Apprenticeships",
        link: "/dashboard",
        image: apprenticeships_icon,
        image2: apprenticeshipsH_icon

    },
    {
        title: "Internships",
        link: "/dashboard/internships",
        image: internships_icon,
        image2: internshipsH_icon

    },
    {
        title: "Jobs",
        link: "/dashboard/jobs",
        image:jobs_icon,
        image2: jobsH_icon

    },
    {
        title: "Settings",
        link: "/dashboard/settings",
        image: settings_icon,
        image2: settingsH_icon

    }
];
