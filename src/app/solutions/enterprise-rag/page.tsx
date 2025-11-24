import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Database } from "lucide-react";

export default function EnterpriseRAGPage() {
    return (
        <ServicePageLayout
            title="Enterprise RAG"
            subtitle="Knowledge Base Automation"
            description="Transform your internal documentation into an intelligent knowledge base. Our Retrieval-Augmented Generation (RAG) systems allow employees to query complex data in natural language."
            icon={<Database className="w-12 h-12 text-purple-500" />}
            features={[
                "Vector Database Integration: Pinecone, Milvus, or Weaviate setup.",
                "Document Parsing: Intelligent extraction from PDFs, Word, and Confluence.",
                "Hallucination Control: Strict citation and source tracking.",
                "Access Control: Role-based data visibility and security."
            ]}
        />
    );
}
