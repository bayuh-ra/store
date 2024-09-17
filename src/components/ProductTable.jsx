import React from "react";
import Table from "./Table";

const ProductTable = () => {
  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>

        <Table.TBody>
          <Table.Row>
            <Table.ColumnHeader colspan="2">Sporting Goods</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.Column>Football</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>Baseball</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>Basketball</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>

          <Table.Row>
            <Table.ColumnHeader colspan="2">Electronics</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.Column>IPod Touch</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>Iphone 5</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>Nexus 7</Table.Column>
            <Table.Column>$399.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>Football</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
        </Table.TBody>
      </Table.TableContainer>
    </div>
  );
};

export default ProductTable;
