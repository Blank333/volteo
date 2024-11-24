import homeIcon from "/icons/home.svg";
import apps from "/icons/apps.svg";
import history from "/icons/history.svg";
import insights from "/icons/insights.svg";
import marpol from "/icons/marpol.svg";
import ohs from "/icons/ohs.svg";
import settings from "/icons/settings.svg";
import workspace from "/icons/workspace.svg";

import "./App.css";
import SidebarButton from "./components/SidebarButton/SidebarButton";
import ContentHeader from "./components/ContentHeader/ContentHeader";
import CrewInfoCard from "./components/CrewInfoCard/CrewInfoCard";
import StatusCard from "./components/StatusCard/StatusCard";
import DailyStream from "./components/DailyStream/DailyStream";
import TodoCard from "./components/TodoCard/TodoCard";

function App() {
  let totalCrew = 16;
  let activeCrew = 9;

  return (
    <main className="main">
      {/* Sidebar */}
      <div className="sidebar card">
        <SidebarButton
          name="Home"
          icon={homeIcon}
        />
        <SidebarButton
          name="Workspace"
          icon={workspace}
        />
        <SidebarButton
          name="MARPOL"
          icon={marpol}
        />
        <SidebarButton
          name="OH&S"
          icon={ohs}
        />
        <SidebarButton
          name="Insights"
          icon={insights}
        />
        <SidebarButton
          name="History"
          icon={history}
        />
        <SidebarButton
          name="Apps"
          icon={apps}
        />
        <SidebarButton
          name="Settings"
          icon={settings}
        />
      </div>

      {/* Content */}
      <div className="content">
        <ContentHeader
          totalCrew={totalCrew}
          activeCrew={activeCrew}
        />
        <div className="contentCards">
          <div className="section1">
            <CrewInfoCard />
            <StatusCard />
          </div>
          <div className="section2">
            <DailyStream />
          </div>
          <div className="section3">
            <TodoCard />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
