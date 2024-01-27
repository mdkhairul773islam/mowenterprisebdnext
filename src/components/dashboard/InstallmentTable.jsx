"use client";
// Import Dependencies
import { Table } from "flowbite-react";
import InstallmentTableTr from "./InstallmentTableTr";

const InstallmentTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="!px-2">SL</Table.HeadCell>
          <Table.HeadCell className="!px-3 whitespace-nowrap">
            NAME
          </Table.HeadCell>
          <Table.HeadCell className="!px-3 whitespace-nowrap">
            MOBILE
          </Table.HeadCell>
          <Table.HeadCell className="!px-3 whitespace-nowrap">
            ADDRESS
          </Table.HeadCell>
          <Table.HeadCell className="!px-3 whitespace-nowrap">
            TOTAL BILL
          </Table.HeadCell>
          <Table.HeadCell className="!px-3 whitespace-nowrap">
            INSTALLMENT DATE
          </Table.HeadCell>
          <Table.HeadCell className="!px-3 whitespace-nowrap">
            INSTALLMENT AMOUNT
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y  divide-dashed">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <InstallmentTableTr key={i.toString()} category={i} />
          ))}

          <Table.Row className="bg-white ">
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell className="!px-3 font-bold text-gray-900">
              Total
            </Table.Cell>
            <Table.Cell className="!px-3 font-bold text-gray-900">
              1084457
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default InstallmentTable;
