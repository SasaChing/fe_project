import React, { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { X, UserRound, ChevronLeft, Files } from "lucide-react";

import { addCount, minusCount, fetchData } from '../../store/slice/counterReducer'
import { closeGridItem } from '../../store/slice/gridReducer'
import { setActiveTab } from '../../store/slice/tabReducer'

import { Tab, QRCode, BaseButton, BaseIconButton, Card, Count, GroupCardRow, GroupLabel, StyledTabContainer } from "../../component";

import { StudentResult } from "../../type";
import { theme } from "../../style/theme";

import { StyledGridContainer, StyledGridItem, StyledHeaderContainer, StyledGridClose, StyledHeaderContent, StyledTextContainer, StyledCopyButtonContainer, StyledVersionText, StyledTitle1, StyledCaption1 } from "./Home.style";

/**課程ID */
const ClassID: string = "X58E9647"
/**QRCode網址 */
const Url: string = "https://www.classswift.viewsonic.io/"

/** [事件] 複製*/
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert(`已複製: ${text}`);
};

/** [工具] 分割資料*/
const chunkArray = (array: StudentResult[], size: number): StudentResult[][] => {
  if (size <= 0) throw new Error("Invalid size");
  const result: StudentResult[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const { countValue, countStatus, tabsValue, gridValue } = useSelector((state: RootState) => ({
    countValue: state.counter.countValue,
    countStatus: state.counter.countStatus,
    tabsValue: state.tabs.value,
    gridValue: state.grid.value,
  }));

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  /**分組資料 */
  const groupedCountValue = useMemo(() => (countStatus ? chunkArray(countValue, 5) : []), [countStatus, countValue]);


  /** Tab 切換處理函式 */
  const handleTabClick = useCallback(
    (tabIndex: number) => dispatch(setActiveTab({ tabIndex })),
    [dispatch]
  );

  /** 關閉 StyledGridItem */
  const handleCloseGridItem = useCallback(
    (index: number) => dispatch(closeGridItem(index)),
    [dispatch]
  );

  return (
    <StyledGridContainer>
      {gridValue.map((isVisible, index) => (
        <StyledGridItem key={index} style={{ display: isVisible ? "flex" : "none" }}>
          <StyledHeaderContainer>
            <StyledGridClose>
              <BaseIconButton label={<X size={20} />} onClick={() => handleCloseGridItem(index)} />
            </StyledGridClose>
            <StyledHeaderContent>
              {index === 0
                ? <StyledTextContainer>
                  <StyledCaption1>
                    <ChevronLeft size={14} /> Back to Class List
                  </StyledCaption1>
                  <StyledTitle1>Join 302 Science</StyledTitle1>
                  <StyledCopyButtonContainer>
                    ID：{ClassID}
                    <BaseIconButton
                      $backgroundColor={theme.colors.info}
                      $hoverBackgroundColor={theme.colors.infoDark}
                      $textColor={theme.colors.light}
                      label={<Files size={14} />}
                      onClick={() => copyToClipboard(ClassID)} />
                    Link
                    <BaseIconButton
                      $backgroundColor={theme.colors.info}
                      $hoverBackgroundColor={theme.colors.infoDark}
                      $textColor={theme.colors.light}
                      label={<Files size={14} />}
                      onClick={() => copyToClipboard(Url)} />
                  </StyledCopyButtonContainer>
                </StyledTextContainer>
                : <React.Fragment>
                  <StyledTitle1>302 Science</StyledTitle1>
                  <UserRound fill={theme.colors.dark} size={16} />
                  16/30
                </React.Fragment>}
            </StyledHeaderContent>
          </StyledHeaderContainer>
          {index === 0 ? (
            <React.Fragment>
              <QRCode text={Url} />
              <StyledVersionText>Version 1.1.7</StyledVersionText>
            </React.Fragment>
          ) : (
            <Tab
              activeTabIndex={tabsValue}
              menuItems={[{ name: "Add" }, { name: "Edit" }, { name: "Delete" }]}
              tabButtonItems={[
                { label: "Student List", onClick: () => handleTabClick(0) },
                { label: "Group", onClick: () => handleTabClick(1) }
              ]}
              tabContainerItems={useMemo(() => [
                <StyledTabContainer>
                  {countStatus
                    ? countValue.map((item, seq) => (
                      <StudentCard key={seq} seq={seq} {...item} />
                    )) : null}
                </StyledTabContainer>
                , <StyledTabContainer>
                  {groupedCountValue.map((groupItem, groupIndex) => (
                    <React.Fragment key={groupIndex}>
                      <GroupLabel>Group {groupIndex + 1}</GroupLabel>
                      <GroupCardRow>
                        {groupItem.map((item, seq) => (
                          <StudentCard key={seq} seq={seq} {...item} />
                        ))}
                      </GroupCardRow>
                    </React.Fragment>
                  ))}
                </StyledTabContainer>
              ], [countStatus, countValue, groupedCountValue])} />
          )}
        </StyledGridItem>
      ))}
    </StyledGridContainer>
  );
}

/**學生卡片 */
interface StudentCardProps extends StudentResult {
  seq: number;
}
const StudentCard = React.memo(({ student_id, name, count, seq }: StudentCardProps) => {
  const dispatch = useDispatch();

  const handleMinusCount = useCallback(
    (student_id: string | null) => dispatch(minusCount({ student_id })),
    [dispatch, student_id]
  );

  const handleAddCount = useCallback(
    (student_id: string | null) => dispatch(addCount({ student_id })),
    [dispatch, student_id]
  );

  return (
    <Card
      cardHeader={(seq + 1).toString().padStart(2, "0")}
      cardContent={name}
      cardFooter={
        <React.Fragment>
          <BaseButton
            $backgroundColor={theme.colors.success}
            $hoverBackgroundColor={theme.colors.successDark}
            onClick={() => handleMinusCount(student_id)}
            disabled={!student_id || count === 0}
            label={"- 1"} />
          <Count $disabled={!student_id}>{count}</Count>
          <BaseButton
            $backgroundColor={theme.colors.error}
            $hoverBackgroundColor={theme.colors.errorDark}
            onClick={() => handleAddCount(student_id)}
            disabled={!student_id}
            label={"+ 1"} />
        </React.Fragment>
      }
      disabled={!student_id} />
  );
})
