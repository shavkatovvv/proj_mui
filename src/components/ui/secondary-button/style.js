import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../../../config/mui-config";

export const SecondaryButton = styled(Button)`
  background-color: ${theme.palette.secondary.main};
  color: #fff;
  padding: 13px 38px;
  border-radius: 10px;
  color: #fff;
  &:hover {
    background-color: ${theme.palette.secondary[600]};
  }
`;
