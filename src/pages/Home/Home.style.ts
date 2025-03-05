import styled from "styled-components";
import { theme } from '../../style/theme';

// #region Grid
/**垂直排列 */
export const StyledFlexColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
    text-align: center;
    background-color: ${theme.colors.light};
    height: calc(100vh - 16px - 40px);
    overflow: hidden;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
export const StyledGridItem = styled(StyledFlexColumnContainer)`
    background: ${theme.colors.grayLight};
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    flex: 1;
    min-height: 0;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    min-height: 200px;

    @media (max-width: 768px) {
        min-height: 150px;
    }
`;
export const StyledHeaderContainer = styled(StyledFlexColumnContainer)``;

export const StyledGridClose = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin: 8px;
    margin-bottom: 0px;
`;
export const StyledHeaderContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0px 10px 40px 40px;
    font-weight: 700;

    @media (max-width: 768px) {
        margin: 0px 20px 8px 20px;
    }
`;
export const StyledTextContainer = styled(StyledFlexColumnContainer)`
    align-items: flex-start;
    gap: 10px;
`;
export const StyledCopyButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;
// #endregion

// #region Typography
export const StyledVersionText = styled.p`
    font-size: 12px;
    color: gray;
    margin-top: 10px;
`;
export const StyledTitle1 = styled.h1`
    font-size: 18px;
    margin: 0;
`;
export const StyledCaption1 = styled.span`
    font-size: 12px;
    margin: 0;
    display: flex;
    align-items: center;
`;
// #endregion