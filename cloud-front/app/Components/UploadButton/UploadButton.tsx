import React from "react";
import { Button, Upload, UploadFile, notification } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

import * as Api from "@/app/api";

export const UploadButton: React.FC = () => {
    const [fileList, setFileList] = React.useState<UploadFile[]>([]);

    const onUploadSuccess = async (options) => {
        try {
            await Api.files.uploadFile(options);

            setFileList([]);

            window.location.reload();
        } catch (err) {
            notification.error({
                message: "Ошибка!",
                description: "Не удалось загрузить файл",
                duration: 2,
            });
        }
    };

    return (
        <Upload
            customRequest={onUploadSuccess}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            className={'qwe'}
        >
            <Button type="primary" icon={<CloudUploadOutlined />} size="large">
                Загрузить файл
            </Button>
        </Upload>
    );
};