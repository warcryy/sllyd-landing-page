# Quick Guide: Creating Simple 3D Models

If you want to quickly create the required 3D models, here are some simple approaches:

## Option 1: Use Blender (Recommended)

1. **Download Blender** (free): https://www.blender.org/download/
2. **Create each model**:

### For lens.glb:
- Add > Mesh > Cylinder
- Name the object "Cylinder" in the outliner
- Scale to about 2x2x0.5 units
- File > Export > glTF 2.0 (.glb) > Save as "lens.glb"

### For cube.glb:
- Add > Mesh > Cube  
- Name the object "Cube" in the outliner
- File > Export > glTF 2.0 (.glb) > Save as "cube.glb"

### For bar.glb:
- Add > Mesh > Cube
- Scale to 4x0.5x0.5 units (long and thin like a bar)
- Name the object "Cube" in the outliner  
- File > Export > glTF 2.0 (.glb) > Save as "bar.glb"

## Option 2: Download Free Models

Search for simple geometric GLB models on:
- **Sketchfab** (free downloads available)
- **OpenGameArt.org**  
- **Three.js examples repository**

## Option 3: Use Online GLB Converters

1. Create basic shapes in any 3D software
2. Export as OBJ or other common format
3. Use online converters like:
   - **gltf.report** - for validation and conversion
   - **Online GLB converters**

## Testing

Once you have the models:
1. Place them in `public/assets/3d/`
2. The FluidGlass component should load without errors
3. You'll see interactive glass effects following your mouse cursor

## Model Requirements Checklist

✅ **File format**: .glb (binary glTF)  
✅ **Geometry names**: Match what the component expects  
✅ **File size**: Keep under 1MB each for good performance  
✅ **Positioning**: Models should be centered at origin (0,0,0)  
✅ **Scale**: Reasonable size (1-3 units in each dimension)  

