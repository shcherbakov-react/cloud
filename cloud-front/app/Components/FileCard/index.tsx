import React from "react";
import styles from "./FileCard.module.scss";
import { getExtensionFromFileName } from "@/app/utils/getExtensionFromFileName";
import { isImage } from "@/app/utils/isImage";
import { getColorByExtension } from "@/app/utils/getColorByExtension";
import { FileTextOutlined } from "@ant-design/icons";

interface FileCardProps {
    filename: string;
    originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({
                                                      originalName,
                                                      filename,
                                                  }) => {
    const ext = getExtensionFromFileName(filename);
    const imageUrl =
        ext && isImage(ext) ? "http://localhost:7777/uploads/" + filename : "";

    const color = getColorByExtension(ext);
    const classColor = styles[color];

    return (
        <div className={styles.root}>
            <div className={styles.icon}>
                <i className={classColor}>{ext}</i>
                {isImage(ext) ? (
                    <img className={styles.image} src={imageUrl} alt="File" />
                ) : (
                    <FileTextOutlined />
                )}
            </div>
            <span>{originalName}</span>
        </div>
    );
};
