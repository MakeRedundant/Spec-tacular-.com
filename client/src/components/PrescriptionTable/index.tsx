import React from "react";
// import colors from "../../styles/colors";
import Input from "../Input";
import Text from "../Text";
import * as S from "./styles";

function PrescriptionTable() {
  return (
    <S.TableContainer>
      <S.TableRow>
        <Text text="Near" />
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader></S.TableHeader>
        <S.TableHeader>SPH</S.TableHeader>
        <S.TableHeader>CYL</S.TableHeader>
        <S.TableHeader>AXIS</S.TableHeader>
      </S.TableRow>

      <S.TableRow>
        <S.TableHeader>O.D||Right</S.TableHeader>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
      </S.TableRow>

      <S.TableRow>
        <S.TableHeader>O.S||Left</S.TableHeader>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
      </S.TableRow>

      <S.TableRow>
        <Text text="Distance" />
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader></S.TableHeader>
        <S.TableHeader>SPH</S.TableHeader>
        <S.TableHeader>CYL</S.TableHeader>
        <S.TableHeader>AXIS</S.TableHeader>
      </S.TableRow>

      <S.TableRow>
        <S.TableHeader>O.D||Right</S.TableHeader>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
      </S.TableRow>

      <S.TableRow>
        <S.TableHeader>O.S||Left</S.TableHeader>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
      </S.TableRow>
      {/* Add row placed below O.S||Left */}
      <S.TableRow>
        <S.TableHeader>Add</S.TableHeader>
        <S.TableData>
          <Input
            id="id"
            type="number"
            width="100%"
            height="20px"
            border="none"
            align
          />
        </S.TableData>
      </S.TableRow>
    </S.TableContainer>
  );
}

export default PrescriptionTable;
