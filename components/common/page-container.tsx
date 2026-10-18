import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div className="px-4 sm:px-6">
        <PageHeader title={title} description={description} />
        <div>{children}</div>
      </div>
    </ClientPageWrapper>
  );
}
