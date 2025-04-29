import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./canvas/Particle";
import pdf from "./resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { SectionWrapper } from "../hoc";

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Container fluid className="resume-section">
                <Particle />
                {/* Top Download Button */}
                <Row className="mb-5 w-100 justify-content-center">
                    <Col xs="auto">
                        <Button
                            variant="primary"
                            href={pdf}
                            target="_blank"
                            className="download-btn px-4 py-3 d-flex align-items-center justify-content-center rounded-md"
                        >
                            <AiOutlineDownload className="inline-block text-[28px] mr-2" />
                            <span>Download Resume</span>
                        </Button>
                    </Col>
                </Row>

                {/* PDF Viewer */}
                <Row className="mb-5 w-100 justify-content-center">
                    <Col xl={10} lg={10} md={12} className="d-flex justify-content-center">
                        <div className="pdf-container shadow-lg" style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "10px", overflow: "hidden" }}>
                            <Document
                                file={pdf}
                                loading={<div className="text-center py-5">Loading resume...</div>}
                                error={<div className="text-center py-5 text-danger">Failed to load resume</div>}
                            >
                                <Page
                                    pageNumber={1}
                                    scale={width > 768 ? 1.9 : width > 576 ? 0.8 : 0.6}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            </Document>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SectionWrapper(Resume, "resume");