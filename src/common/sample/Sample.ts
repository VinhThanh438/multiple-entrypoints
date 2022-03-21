import { ITimestamp } from '@common/timestamp.interface';
import mongoose, { Schema, Document } from 'mongoose';

export interface ISampleResponse {
    id: string;
    title: string;
    content: string;
}

export interface ISample extends Document, ITimestamp {
    _id: mongoose.Types.ObjectId;
    title: string;
    content: string;

    transform(): ISampleResponse;
}

const SampleSchema: Schema<ISample> = new Schema(
    {
        title: { type: String, trim: true, required: true },
        content: { type: String, required: true },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
);

SampleSchema.method({
    /**
     * Transform Sample object to API response
     *
     * @returns
     */
    transform(): ISampleResponse {
        const transformed: ISampleResponse = {
            id: this._id.toHexString(),
            title: this.title,
            content: this.content,
        };

        return transformed;
    },
});

// Export the model and return your ISample interface
export default mongoose.model<ISample>('Sample', SampleSchema);
