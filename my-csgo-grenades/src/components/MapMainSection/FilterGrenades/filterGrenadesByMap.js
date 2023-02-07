import { grenadeInfos } from "../Data/script";

export const mirageGrenades = [];
const grenadeInfos = grenadeInfos;

const grenadesFilteredByMap = (grenadeInfos) => {
    mirageGrenades = grenadeInfos.filter(grenade => grenade.map === 'mirage');
    console.log(mirageGrenades);
    return mirageGrenades
}