import ListDropDownComponent from "./ListDropDownComponent";
import MinionComponent from "./MinionComponent";
import MainButtonComponent from "./MainButtonComponent";
import UpgradeComponent from "./UpgradeComponent";
import useProfileContext from "../Contexts/useProfileContext";
// import BackgroundMusic from "./BackgroundMusic";

const MainComponent = () => {
    const {profile} = useProfileContext();

    return (
        <>
            <ListDropDownComponent items={profile.talents} box_top={'3%'} cont_top={'7%'} profile={profile}/>
            {/*<ListDropDownComponent items={profile.cometics} box_top={'46%'} cont_top={'50%'} profile={profile}/>*/}
            <MinionComponent profile={profile}/>
            {/*<BackgroundMusic/>*/}
            <MainButtonComponent profile={profile}/>
            <UpgradeComponent profile={profile}/>
            <div style={{position:"relative", top:"-50px"}}>
                {Math.ceil(profile.Localcount)}
            </div>
            <div className={"total-count"}>
                <label>
                    viewers/sec - {profile.autoClickNum}
                    <br/>
                    viewers/click - {profile.incNumber}
                    <br/>
                    {/*{profile.theme}*/}
                    {/*<br/>*/}

                </label>
                Total Clicks: {Math.ceil(profile.TotalCount)}
            </div>
        </>
    );
};

export default MainComponent;


