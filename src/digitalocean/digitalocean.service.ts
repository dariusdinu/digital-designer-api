import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class DigitalOceanService {
  private s3: AWS.S3;
  constructor() {
    this.s3 = new AWS.S3({
      endpoint: 'https://digital-designer.fra1.digitaloceanspaces.com',
      accessKeyId: 'DO0023D6WPNRAMVMXLU6',
      secretAccessKey: 'dmNYHLMZVsGlFimwCFu/pFEYz6EAgaeN79z9bzPJyYk',
    });
  }
  async uploadFile(buffer: Buffer, filename: string): Promise<string> {
    const params = {
      Bucket: 'digital-designer',
      Key: filename,
      Body: buffer,
    };
    const { Location } = await this.s3.upload(params).promise();
    return Location;
  }
}
