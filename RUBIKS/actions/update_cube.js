import * as Types from './types';


export const setID = cubeID => {
  return {
    type: Types.SET_CUBE_ID,
    payload: cubeID
  }
}

export const updateComp = num => {
  return {
    type: Types.UPDATE_COMPLETED,
    payload: num
  }
}

export const target_1 = panelID => {
  return {
    type: Types.UPDATE_TARGET_1,
    payload: panelID
  }
}
export const target_2 = panelID => {
  return {
    type: Types.UPDATE_TARGET_2,
    payload: panelID
  }
}
export const target_3 = panelID => {
  return {
    type: Types.UPDATE_TARGET_3,
    payload: panelID
  }
}
export const target_4 = panelID => {
  return {
    type: Types.UPDATE_TARGET_4,
    payload: panelID
  }
}
export const target_5 = panelID => {
  return {
    type: Types.UPDATE_TARGET_5,
    payload: panelID
  }
}
export const target_6 = panelID => {
  return {
    type: Types.UPDATE_TARGET_6,
    payload: panelID
  }
}
export const target_7 = panelID => {
  return {
    type: Types.UPDATE_TARGET_7,
    payload: panelID
  }
}
export const target_8 = panelID => {
  return {
    type: Types.UPDATE_TARGET_8,
    payload: panelID
  }
}
export const target_9 = panelID => {
  return {
    type: Types.UPDATE_TARGET_9,
    payload: panelID
  }
}

export const curr_1 = panelID => {
  return {
    type: Types.UPDATE_CURRENT_1,
    payload: panelID
  }
}
export const curr_2 = panelID => {
  return {
    type: Types.UPDATE_CURRENT_2,
    payload: panelID
  }
}
export const curr_3 = panelID => {
  return {
    type: Types.UPDATE_CURRENT_3,
    payload: panelID
  }
}
export const curr_4 = panelID => {
  return {
    type: Types.UPDATE_CURRENT_4,
    payload: panelID
  }
}
export const curr_5 = panelID => {
  return {
    type: Types.UPDATE_CURRENT_5,
    payload: panelID
  }
}
export const curr_6 = panelID => {
  return {
    type: Types.UPDATE_CURRENT_6,
    payload: panelID
  }
}
export const curr_7 = panelID => {
  return {
    type: Types.UPDATE_CURRENT_7,
    payload: panelID
  }
}
export const curr_8 = panelID => {
  return {
    type: Types.UPDATE_CURRENT_8,
    payload: panelID
  }
}
export const curr_9 = panelID => {
  return {
    type: Types.UPDATE_CURRENT_9,
    payload: panelID
  }
}
export const moves = () => {
  return {
    type: Types.UPDATE_MOVES
  }
}