import styled from "styled-components";
import { CircleAlert } from "lucide-react";
import { NotFoundContainer } from './NotFound.style';

export default function NotFound() {
  return (
    <NotFoundContainer>
      <CircleAlert size={48} />
      <h1>404 - 找不到頁面</h1>
      <p>抱歉，您訪問的頁面不存在。</p>
    </NotFoundContainer>
  );
};