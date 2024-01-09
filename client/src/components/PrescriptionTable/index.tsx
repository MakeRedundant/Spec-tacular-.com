import React from "react";
// import colors from "../../styles/colors";
import Input from "../Input";
import Text from "../Text";
import * as S from "./styles";

function PrescriptionTable() {
  return (
    <S.TableContainer>
      <tbody>
        {/* Near */}
        <tr>
          <th colSpan="4">Near</th>
        </tr>
        <tr>
          <th></th>
          <th>SPH</th>
          <th>CYL</th>
          <th>AXIS</th>
        </tr>
        <tr>
          <th>O.D||Right</th>
          <td>
            <Input
              id="nearOdRightSPH"
              type="number"
              width="100%"
              height="20px"
              border="bottom"
              align
              
            />
          </td>
          <td>
            <Input
              id="nearOdRightCYL"
              type="number"
              width="100%"
              height="20px"
              border="bottom"
              align
            />
          </td>
          <td>
            <Input
              id="nearOdRightAXIS"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
        </tr>
        <tr>
          <th>O.S||Left</th>
          <td>
            <Input
              id="nearOsLeftSPH"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
          <td>
            <Input
              id="nearOsLeftCYL"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
          <td>
            <Input
              id="nearOsLeftAXIS"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
        </tr>

        {/* Distance */}
        <tr>
          <th colSpan="4">Distance</th>
        </tr>
        <tr>
          <th></th>
          <th>SPH</th>
          <th>CYL</th>
          <th>AXIS</th>
        </tr>
        <tr>
          <th>O.D||Right</th>
          <td>
            <Input
              id="distanceOdRightSPH"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
          <td>
            <Input
              id="distanceOdRightCYL"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
          <td>
            <Input
              id="distanceOdRightAXIS"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
        </tr>
        <tr>
          <th>O.S||Left</th>
          <td>
            <Input
              id="distanceOsLeftSPH"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
          <td>
            <Input
              id="distanceOsLeftCYL"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
          <td>
            <Input
              id="distanceOsLeftAXIS"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
        </tr>

        {/* Add */}
        <tr>
          <th>Add</th>
          <td>
            <Input
              id="addSPH"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
          <td>
            <Input
              id="addCYL"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
          <td>
            <Input
              id="addAXIS"
              type="number"
              width="100%"
              height="20px"
              border="top"
              align
            />
          </td>
        </tr>
      </tbody>
    </S.TableContainer>
  );
}

export default PrescriptionTable;

