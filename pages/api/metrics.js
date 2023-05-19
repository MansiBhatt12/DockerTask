import path from "path";
import { promises as fs } from "fs";
// import metrics from "../../data/metrics.json";
import metrics from "../../data/container_bytes.json";
/* export default async function handler(req, res) {
    const jsonDir = path.join(process.cwd(), "data");
    const metrics = await fs.readFile(jsonDir + "/metrics.json", "utf8");
    res.status(200).json(metrics);
} */

export default async function handler(req, res) {
    return res.status(200).json(metrics);
}
