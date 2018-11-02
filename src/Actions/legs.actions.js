import { legsConstants } from '../Constants';

function getRandomResult() {
    return {
        name: 'Vittjärvs IK',
        time: '1:25:39',
        position: 1,
        behind: '1:00:00',
        newArrival: false,
    }
}
function addRandomResult(payload) {
    return dispatch => {
    const payload =  getRandomResult()
        dispatch(success(payload));
    }
    function success() { return { type: legsConstants.ADD_RANDOM_MOCKED_TEAM_RESULT, payload } }
}

export const themeActions = {
   addRandomResult
};