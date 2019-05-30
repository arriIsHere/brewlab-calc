export default function alcoholByVolume(originalGravity, finalGravity) {
    const gravityDelta = originalGravity - finalGravity;

    return (76.08 * gravityDelta / (1.775-originalGravity)) * (finalGravity / 0.794);
}