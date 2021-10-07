import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
function App() {
  return (
    <div className="top py-5">
    <div className=" container">
      <div className="row justify-content-center">
        <Card
          name="FREE"
          price="$0"
          users="Single User"
          usersc="true"
          storage="5GB Storage"
          storagec="true"
          project="Unlimited Public Projects"
          projectc="true"
          access="Community Access"
          accessc="true"
          privateprojects="Unlimited Private Projects"
          privateprojectsc="false"
          support="Dedicated Phone Support"
          supportc="false"
          subdomain="Free Subdomain"
          subdomainc="false"
          reports="Monthly Status Reports"
          reportsc="false"
        />
        <Card
          name="PLUS"
          price="$9"
          users="5 Users"
          usersc="true"
          storage="50GB Storage"
          storagec="true"
          project="Unlimited Public Projects"
          projectc="true"
          access="Community Access"
          accessc="true"
          privateprojects="Unlimited Private Projects"
          privateprojectsc="true"
          support="Dedicated Phone Support"
          supportc="true"
          subdomain="Free Subdomain"
          subdomainc="true"
          reports="Monthly Status Reports"
          reportsc="false"
        />
        <Card
          name="Pro"
          price="$49"
          users="Unlimited Users"
          usersc="true"
          storage="150GB Storage"
          storagec="true"
          project="Unlimited Public Projects"
          projectc="true"
          access="Community Access"
          accessc="true"
          privateprojects="Unlimited Private Projects"
          privateprojectsc="true"
          support="Dedicated Phone Support"
          supportc="true"
          subdomain="Free Subdomain"
          subdomainc="true"
          reports="Monthly Status Reports"
          reportsc="true"
        />
      </div>
    </div>
    </div>
  );
}

export default App;
