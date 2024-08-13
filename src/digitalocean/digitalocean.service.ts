import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class DigitalOceanService {
  private s3: AWS.S3;
  constructor() {
    this.s3 = new AWS.S3({
      endpoint: process.env.ORIGIN_ENDPOINT,
      accessKeyId: process.env.SPACES_ACCESS_KEY,
      secretAccessKey: process.env.SPACES_SECRET_KEY,
    });
  }
  async uploadFile(buffer: Buffer, filename: string): Promise<string> {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: filename,
      Body: buffer,
      ACL: 'public-read',
    };
    const { Location } = await this.s3.upload(params).promise();
    return Location;
  }
}
