import { useLocation, useHistory } from "react-router";
import { VscAccount as AccountIcon } from "react-icons/vsc";
import { FiLogOut as LogOutIcon } from "react-icons/fi";
import { FaBell as BellIcon, FaWrench as WrenchIcon } from "react-icons/fa";
import Q3Logo from "../../assets/LOGO_Q3_White.png";
import "./NavbarStyles.scss";
import { NotificationContext } from "../../context/NotificationContext";
import { useContext } from "react";

export default function Navbar() {
  return (
    <nav>
      <NavbarRedirects />
      <NavbarUserSection />
    </nav>
  );
}

function NavbarRedirects() {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <section>
      <img alt="Q3" src={Q3Logo} />
      <p
        className={pathname === "/monitoring" ? "bold-text" : ""}
        onClick={() => history.push("monitoring")}
      >
        Machine Monitoring
      </p>
      <p
        className={pathname === "/chealth" ? "bold-text" : ""}
        onClick={() => history.push("chealth")}
      >
        Component Health
      </p>
      <p
        className={pathname === "/lifespan" ? "bold-text" : ""}
        onClick={() => history.push("lifespan")}
      >
        Lifespan
      </p>
    </section>
  );
}

function NavbarUserSection() {
  const { notifications } = useContext(NotificationContext);

  return (
    <section>
      <div className="Name-Container">
        <p>First name</p>
        <p>Last name</p>
      </div>
      <AccountIcon />
      <div className="Notification-Dropdown">
        <BellIcon />
        <div className="Notification-Dropdown-Content">
          <h3>Notifications</h3>
          {notifications.length ? (
            notifications.map((n, i) => {
              return (
                <div>
                  {n.Component}
                  <br />
                </div>
              );
            })
          ) : (
            <i>Everything looks good</i>
          )}
        </div>
      </div>
      <div className="Notification-Dropdown">
        <WrenchIcon />
        <div className="Notification-Dropdown-Content">
          <h3>Maintenance</h3>
          {notifications.length ? (
            notifications.map((n, i) => {
              return (
                <div>
                  {n.Component}
                  <br />
                </div>
              );
            })
          ) : (
            <i>Everything looks good</i>
          )}
        </div>
      </div>
      <LogOutIcon />
    </section>
  );
}
