import ListDropDownComponent from "./ListDropDownComponent";
import MinionComponent from "./MinionComponent";
import MainButtonComponent from "./MainButtonComponent";
import UpgradeComponent from "./UpgradeComponent";
import useProfileContext from "../Contexts/useProfileContext";

const MainComponent = () => {
    const {profile, setCurrentTheme} = useProfileContext();

    return (
        <>
            <ListDropDownComponent items={profile.talents} box_top={'3%'} cont_top={'7%'} theme={setCurrentTheme}/>
            <ListDropDownComponent items={profile.cometics} box_top={'46%'} cont_top={'50%'} theme={setCurrentTheme}/>
            <MinionComponent profile={profile}/>

            <MainButtonComponent profile={profile}/>
            <UpgradeComponent profile={profile}/>
            <div>
                {profile.Localcount}
            </div>
            <div>
                <label>
                    autoClickNum - {profile.autoClickNum}
                    <br/>
                    incNumber - {profile.incNumber}
                    <br/>
                    MakeCuteNoise - {profile.upgrades[2][4] ? "true" : "false"}
                    <br/>
                </label>
                <button onClick={
                    () => {
                        profile.upgrades[2][3]++
                    }
                }>Test button
                </button>
            </div>
            <div className={"total-count"}>
                Total Clicks: {profile.TotalCount}
            </div>
        </>
    );
};

export default MainComponent;


